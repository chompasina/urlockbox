class CreateLink < ActiveRecord::Migration[5.0]
  def change
    create_table :links do |t|
      t.string :title
      t.string :url
      t.boolean :read,  default: false
      
      t.timestamps null: false
    end
  end
end
