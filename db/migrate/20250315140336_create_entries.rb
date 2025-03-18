class CreateEntries < ActiveRecord::Migration[8.0]
  def change
    create_table :entries do |t|
      t.integer :user_nif
      t.string :transaction_type
      t.decimal :amount
      t.string :category
      t.date :date
      t.text :description

      t.timestamps
    end
  end
end
