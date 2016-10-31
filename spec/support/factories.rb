FactoryGirl.define do
  factory :user do
    email
    password "MyPassword"
    password_confirmation "MyPassword"
  end
  
  sequence :email do |n|
    "myEmail#{n}@example.com"
  end
end