class Users::SessionsController < Devise::SessionsController
  respond_to :json
  private

  def login_params
    params.require(:user).permit(:email, :password)
  end

  def respond_with(resource, _opts = {})
  if resource
    render json: {
      data: UserSerializer.new(resource).serializable_hash[:data]
    }, status: :ok
  else
    render json: {
      message: "Not authenticated"
    }, status: :unauthorized
  end
end


  def respond_to_on_destroy
    if current_user
      render json: {
        message: "logged out successfully"
      }, status: :ok
    else
      render json: {
        status: 401,
        message: "Couldn't find an active session."
      }, status: :unauthorized
    end
  end
end
