class Entry < ApplicationRecord
    validates :transaction_type, inclusion: { in: %w[expense income], message: "%{value} is not a valid transaction type" }
end
