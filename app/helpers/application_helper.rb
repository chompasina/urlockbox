module ApplicationHelper
  
  def has_read?(link)
    if link.read
      return "Mark as Read"
    else
      return "Mark as Unread"
    end
  end
  
  def link_style(link)
    if link.read
       "class=link-read"
    else
      "class=link-unread"
    end
  end
end
