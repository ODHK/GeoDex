class Authentication
  include Mongoid::Document
  field :user_id, type: Integer
  field :provider, type: String
  field :uid, type: String
  field :token, type: String
end
