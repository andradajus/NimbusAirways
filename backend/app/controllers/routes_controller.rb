class RoutesController < ApplicationController

  def index
    routes = Route.all
    render json: { routes: routes }
  end
end
