class LinksController < ApplicationController
  before_action :user_login
  def index
    @link = Link.new
    @links = current_user.links
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
  
  def update
    @link = Link.find(params[:id])
    @link.update_attributes(now_read: @link.switch)
    redirect_to links_path
  end
  
  private
  
    def link_params
      params.require(:link).permit(:title, :url, :user_id)
    end
    
    def user_login
      unless current_user
        redirect_to login_path
      end
    end
  
end