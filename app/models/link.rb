class Link < ActiveRecord::Base
  belongs_to :user
  validates :title, presence: true
  validates :url, presence: true
  validates :url, :format => URI::regexp(%w(http https))
end