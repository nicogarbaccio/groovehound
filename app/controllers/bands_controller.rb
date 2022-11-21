class BandsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    def index
        render json: Band.all, status: :ok
    end

    def show
      band = Band.all.find(params[:id])
      if band
          render json: band
      else
          render json: {"errors": "Band not found"}, status: :not_found
      end
    end

    def create
        render json: Band.create!(band_params), status: :created
    end
    
      private
      def band_params
        params.permit(:name, :image_url, :genre, :secondary_genre, :hometown)
      end
end
