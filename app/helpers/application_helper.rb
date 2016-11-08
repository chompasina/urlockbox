module ApplicationHelper
  
  def has_read?(link)
    if link.read
      return "Mark as Read"
    else
      return "Mark as Unread"
    end
  end
end
