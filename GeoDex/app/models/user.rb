class User
  include Mongoid::Document
  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me,
            :facebook, :github, :googleplus, :twitter, :location, :mailinglist, 
            :uid, :provider, :name, :avatar, :blog, :company, :role

  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  devise :omniauthable, :omniauth_providers => [:facebook,:google_oauth2,:github]

  ## Database authenticatable
  field :email,              :type => String, :default => ""
  field :encrypted_password, :type => String, :default => ""
  
  ## Recoverable
  field :reset_password_token,   :type => String
  field :reset_password_sent_at, :type => Time

  ## Rememberable
  field :remember_created_at, :type => Time

  ## Trackable
  field :sign_in_count,      :type => Integer, :default => 0
  field :current_sign_in_at, :type => Time
  field :last_sign_in_at,    :type => Time
  field :current_sign_in_ip, :type => String
  field :last_sign_in_ip,    :type => String

  ## Confirmable
  # field :confirmation_token,   :type => String
  # field :confirmed_at,         :type => Time
  # field :confirmation_sent_at, :type => Time
  # field :unconfirmed_email,    :type => String # Only if using reconfirmable

  ## Lockable
  # field :failed_attempts, :type => Integer, :default => 0 # Only if lock strategy is :failed_attempts
  # field :unlock_token,    :type => String # Only if unlock strategy is :email or :both
  # field :locked_at,       :type => Time

  ## Token authenticatable
  # field :authentication_token, :type => String
  ROLES = %w[banned guest member admin]

  def is_admin?
    self.role == ROLES[3]
  end

  def is_member?
    self.role == ROLES[2]
  end
  
  def get_facebook_image (user)
    if user.avatar.nil?
      return "http://www.mixcloud.com/media/images/graphics/33_Profile/default_user_300x300-v4.png?v=107"
    end
    if user.avatar.include? "square"
      user.avatar["square"] = "large"
      return user.avatar
    else
      return user.avatar
    end
  end
  def self.find_for_github_oauth2(auth, signed_in_resource=nil)
    ap auth
    user = User.where(:provider => auth.provider, :uid => auth.uid).first
    opts = {
      name:auth.extra.raw_info.name,
      email:auth.info.email,
      github:auth.info.nickname,
      avatar:auth.info.image,
      blog:auth.info.urls.Blog,
      company:auth.extra.raw_info.company,
      location:auth.extra.raw_info.location,
      role:'member'
    }
    if user
      return user
    else
      registered_user = User.where(:email => auth.info.email).first
      if registered_user
        registered_user = fill_in_user_profile(registered_user, opts)
        return registered_user
      else
        opts = {
          password:Devise.friendly_token[0,20],
          provider:auth.provider,
          uid:auth.uid
          }.merge(opts)
        user = User.create(opts)
      end 
    end
  end

  def self.find_for_facebook_oauth(auth, signed_in_resource=nil)
    ap auth
    user = User.where(:provider => auth.provider, :uid => auth.uid).first
    opts = {
      name:auth.extra.raw_info.name,
      email:auth.info.email,
      avatar:auth.info.image,
      facebook:auth.info.nickname,
      location:auth.location,
      role:'member'
    }
    if user
      return user
    else
      registered_user = User.where(:email => auth.info.email).first
      if registered_user
        registered_user = fill_in_user_profile(registered_user, opts)
        return registered_user
      else
        opts = {
          password:Devise.friendly_token[0,20],
          provider:auth.provider,
          uid:auth.uid
          }.merge(opts)
        user = User.create(opts)
      end 
    end
  end

  def self.find_for_google_oauth2(access_token, signed_in_resource=nil)
    ap access_token
    data = access_token.info
    user = User.where(:provider => access_token.provider, :uid => access_token.uid ).first
    gplus = data.urls.Google if data.urls.present? else nil
    opts = {
      :name => data.name,
      :email => data.email,
      :avatar => data.image,
      :googleplus => gplus,
      :role => 'member'
    }
    if user
      return user
    else
      registered_user = User.where(:email => access_token.info.email).first
      if registered_user
        registered_user = fill_in_user_profile(registered_user, opts)
        return registered_user
      else
      opts = {
          provider:access_token.provider,
          uid: access_token.uid ,
          password: Devise.friendly_token[0,20]
          }.merge(opts)
        user = User.create(opts)
        end
     end
  end

  def self.fill_in_user_profile(user, opts={})
    user['name'] ||= opts[:name]
    user['email'] ||= opts[:email] 
    user['github'] ||= opts[:github]
    user['facebook'] ||= opts[:facebook] 
    user['googleplus'] ||= opts[:googleplus] 
    user['twitter'] ||= opts[:twitter] 
    user['avatar'] ||= opts[:avatar] 
    user['blog'] ||= opts[:blog] 
    user['company'] ||= opts[:company] 
    user['location'] ||= opts[:location]
    user.save
    return user
  end
end