class Route < ApplicationRecord
  has_many :flights
  has_one :origin, class_name: 'Location', primary_key: 'origin_location', foreign_key: 'code'
  has_one :destination, class_name: 'Location', primary_key: 'destination_location', foreign_key: 'code'
  has_many :aircrafts, through: :flights
  validates_presence_of :origin_location, :origin_code, :origin_name,
                        :destination_location, :destination_code, :destination_name,
                        :price

  def self.create_route(options = {})
    Route.create!(
      origin_location: options[:origin_location],
      origin_code: options[:origin_code],
      origin_name: options[:origin_name],
      destination_location: options[:destination_location],
      destination_code: options[:destination_code],
      destination_name: options[:destination_name],
      price: options[:price],
      is_available: options.fetch(:is_available, true)
    )
  end
end
