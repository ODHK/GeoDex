require "uri"
require "net/http"
require 'rubygems'
require 'nokogiri'
require 'open-uri'

# Converts HK 1980 Grid References to LatLong co-ordinates
# Uses http://www.geodetic.gov.hk/smo/tform/tform.aspx
# 
module ToLatLong
  def ToLatLong.latlong(easting, northing)
    url = 'http://www.geodetic.gov.hk/smo/tform/tform.aspx'
    doca = Nokogiri::HTML(open(url))

    params = {
      'TextBox11' => 'Anything', 
      'TextBox12' => easting, 
      'TextBox13' => northing, 
      'DropDownList1' => 'inHK1980',
      'DropDownList2' => 'outITRF96', 
      'RadioButtonList1' => 'DecDegree', 
      'Submit1' => 'Submit',
      '__EVENTVALIDATION' => doca.at_css("#__EVENTVALIDATION")[:value],
      '__VIEWSTATE' => doca.at_css("#__VIEWSTATE")[:value] 
    }

    x = Net::HTTP.post_form(URI.parse('http://www.geodetic.gov.hk/smo/tform/tform.aspx'), params)
    doc = Nokogiri::HTML(x.body)
    @lat = doc.css("#Label16").text
    @long = doc.css("#Label17").text
    return @lat, @long
  end
end