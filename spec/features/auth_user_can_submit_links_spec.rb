require 'rails_helper'

RSpec.feature "Authenticated User Can Submit Links" do
  scenario "they submit links on links index" do
    # user = create(:user)
    
    # allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)
    user = User.create!(email: 'tommasina@example.com', password: 'password', password_confirmation: 'password')
    
    visit login_path
    
    fill_in 'Email Address', with: 'tommasina@example.com'
    fill_in 'Password', with: 'password'
    click_button 'Login'
    
    expect(current_path).to eq(links_path)
    visit links_path
    
    fill_in 'Title', with: 'Democracy Now!'
    fill_in 'URL', with: 'http://www.democracynow.org'
    click_button 'Create Link'
    
    expect(page).to have_content('Democracy Now!')
    expect(page).to have_content('http://www.democracynow.org')
  
    
  end
end