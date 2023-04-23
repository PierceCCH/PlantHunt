# loads tensorflow hub module and predicts the class of the image

import tensorflow as tf
import tensorflow_hub as hub
import PIL.Image as Image
import numpy as np

m = hub.KerasLayer('https://tfhub.dev/google/aiy/vision/classifier/plants_V1/1')

# import image
img = Image.open('test.jpg').resize((224, 224))

predictions = m(img)
print(predictions)