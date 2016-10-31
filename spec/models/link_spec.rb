require 'rails_helper'

RSpec.describe Link, type: :model do
  it { should belong_to :user }
  it { should validate_presence_of :title }
  it { should validate_presence_of :url }
  
  it "has a default status" do
    link = Link.new
    expect(link.read).to eq(false)
  end
  
  it "cannot have invalid url" do
    link = Link.create(url: 'broken')
    expect(link.save).to eq(false)
  end
end