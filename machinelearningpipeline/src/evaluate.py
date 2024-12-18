import pandas as pd
import pickle 
from sklearn.metrics import accuracy_score
import yaml
import os
import mlflow
from urllib.parse import urlparse

import mlflow


os.environ['MLFLOW_TRACKING_URI']="https://dagshub.com/Arogya-2002/machinelearningpipeline.mlflow"
os.environ['MLFLOW_TRACKING_USERNAME']="Arogya-2002"
os.environ['MLFLOW_TRACKING_PASSWORD']="f405ca0b98caa06f6cac42bb0bf8d4487e0f7c70"


## Load all the parameters from params.yaml
params=yaml.safe_load(open("params.yaml"))["train"]

def evaluate(data_path,model_path):
    data = pd.read_csv(data_path)
    X=data.drop(columns=["Outcome"])
    y=data["Outcome"]
    
    mlflow.set_tracking_uri("https://dagshub.com/Arogya-2002/machinelearningpipeline.mlflow")
    
    ##load the model from the disk
    
    model =pickle.load(open(model_path,'rb'))
    
    
    predictions = model.predict(X)
    accuracy = accuracy_score(y,predictions)
    
    ##log metrics to MLFLOW
    
    mlflow.log_metric("accuracy",accuracy)
    print(f"Mode accuracy:{accuracy}")
    
if __name__=="__main__":
    evaluate(params["data"],params["model"])