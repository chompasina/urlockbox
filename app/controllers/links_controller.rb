class LinksController < ApplicationController
  before_action :user_login
  def index
    @link = Link.new
  end
  
  def create
    @user = User.find(session[:user_id])
    @link = @user.links.new(link_params)
    if @link.save
      flash[:notice] = "Link added"
      redirect_to links_path
    else
      flash[:error] = @link.errors.full_messages.join(', ')
      redirect_to links_path
    end
  end
  
  private
  
    def link_params
      params.require(:link).permit(:title, :url, :read)
    end
    
    def user_login
      unless current_user
        redirect_to login_path
      end
    end
  
end