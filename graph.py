import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn import metrics
import matplotlib.pyplot as plt
from matplotlib.dates import date2num
import datetime

# Read the CSV file
data = pd.read_csv('coin_Bitcoin.csv')

# Convert dates to numerical values
data['Date'] = pd.to_datetime(data['Date'])
data['Date'] = data['Date'].map(date2num)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(data['Date'].values.reshape(-1,1), data['Marketcap'], test_size=0.2, random_state=0)

# Train a linear regression model
model = LinearRegression()
model.fit(X_train, y_train)

# Use the model to predict the market cap
y_pred = model.predict(X_test)

# Plot the actual and predicted values
plt.scatter(X_test, y_test, color='gray')
plt.plot(X_test, y_pred, color='red', linewidth=2)
plt.show()