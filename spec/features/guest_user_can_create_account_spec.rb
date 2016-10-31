require 'rails_helper'

# As an unauthenticated user, 
# when I visit the root of the application, /,
 # I should be redirected to a page 
 # which prompts me to "Log In or Sign Up".
RSpec.feature "guest user registers account" do
  scenario "they register a new account" do
    visit root_path
    
    expect(current_path).to eq(login_path)
    
    expect(page).to have_content("log in below or Sign Up")
    
    click_link "Sign Up"
    
    expect(current_path).to eq(new_user_path)
    expect(page).to have_field("Email Address")
    expect(page).to have_field("Password")
    expect(page).to have_field("Confirm Password")
    
    fill_in "Email Address", with: "tommasina@example.com"
    fill_in "Password", with: "password"
    fill_in "Confirm Password", with: "password"
    click_on "Create Account"
    
    expect(current_path).to eq('/login')
    
    fill_in "Email Address", with: "tommasina@example.com"
    fill_in "Password", with: "password"
    click_on 'Login'
    
    expect(current_path).to eq '/links'
    expect(page).to have_link 'Logout'
    expect(page).to_not have_link 'Log In'
    
    click_link 'Logout'
    expect(current_path).to eq(login_path)
    expect(page).to have_button('Login')
    
  end
end