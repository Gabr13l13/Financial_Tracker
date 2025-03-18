json.extract! entry, :id, :user_nif, :transaction_type, :amount, :category, :date, :description, :created_at, :updated_at
json.url entry_url(entry, format: :json)
