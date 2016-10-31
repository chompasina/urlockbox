require 'rails_helper'

# As an authenticated user who has added links to my URLockbox, 
# when I view the link index:
# Next to each unread link I should see an option to "Mark as Read".
# Clicking this should visibly change the read status to true, and the change should persist.
# Next to each read link I should see an option to "Mark as Unread".
# Clicking this should change the read status to false, and the change should persist.
# Read links should be stylistically differentiated from unread links. You could gray them out or use a strike through or anything you think appropriately informs the user that their link is read or unread.


RSpec.feature "Authenticated User Can Update Link Status" do
  scenario "User has added links" do
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
    
    within("#link-list") do
      click_button 'Change Status'
      
      # expect(link.status).to eq(true)
      expect(page).to have_content("Change Status")
      expect(page).to have_content("Read? true")
      
      click_button "Change Status"
      
      # expect(link.status).to eq(false)
      expect(page).to have_content("Read? false")
    end
  end
end