import requests
import pandas as pd
import matplotlib.pyplot as plt

# Make a GET request to the API
response = requests.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en&precision=2")

# Convert the JSON response to a pandas DataFrame
data = pd.DataFrame(response.json())

# Save the DataFrame to a CSV file
data.to_csv('data.csv', index=False)

# Read the CSV file
data = pd.read_csv('data.csv')
print("Data created successfully")

# Plot the data
plt.plot(data['id'], data['market_cap'])
plt.show()