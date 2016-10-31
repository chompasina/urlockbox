FactoryGirl.define do
  factory :user do
    email
    password "MyPassword"
    password_confirmation "MyPassword"
    id "1"
  end
  
  
  sequence :email do |n|
    "myEmail#{n}@example.com"
  end
end