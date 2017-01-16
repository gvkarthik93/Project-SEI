#Decision Tree Classifier
import sklearn
from sklearn import tree
features = [[140,"smooth"],[130,"smooth"],
[150,"bumpy"],[170,"bumpy"]]

#smooth = 1
#bumpy = 0

binFeatures = [[140,1],[130,1],
[150,0],[170,0]]

labels = ["apple","apple","orange","orange"]

#apple = 1
#orange = 0

binLabels = [1,1,0,0]

#Classifier Object
clf = tree.DecisionTreeClassifier()

#Training algorithm is included in classifier object and is called fit
#Think of fit as synonym for "Find Patterns in Data"
clf = clf.fit(binFeatures,binLabels)

#Input to the classifier is the feature of new fruit
#You can give any number of inputs in classifier
print (clf.predict([[150,0]]))
if clf.predict([[150,0]]) == 1:
	print ("Apple")
else:
	print ("Orange")

print (type(clf.predict([[150,0]])))

#Learn how to set features
#Learn numpy and scikit learn libraries
#Implement learning algorithm by storing input data in training set after processing