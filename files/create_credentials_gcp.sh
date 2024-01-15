#!/bin/bash

# Checking the arguments
if [ "$#" -lt 2 ]; then
    echo "Usage: $0 <project_name> <service_account_name>"
    exit 1
fi

project_name=$1
service_account_name=$2

# Activate APIs
gcloud services enable container.googleapis.com
gcloud services enable compute.googleapis.com
gcloud services enable artifactregistry.googleapis.com
gcloud services enable storage.googleapis.com
gcloud services enable cloudresourcemanager.googleapis.com

# List of roles
roles=("roles/artifactregistry.admin" "roles/artifactregistry.writer" "roles/compute.networkAdmin" "roles/iam.serviceAccountCreator" "roles/iam.serviceAccountDeleter" "roles/container.admin" "roles/container.clusterAdmin" "roles/resourcemanager.projectIamAdmin" "roles/artifactregistry.createOnPushRepoAdmin" "roles/iam.serviceAccountAdmin" "roles/iam.serviceAccountUser" "roles/source.admin" "roles/storage.admin")

# Create the service account
echo "Creating service account: $service_account_name"
gcloud iam service-accounts create $service_account_name --display-name="$service_account_name" --project=$project_name

# Assign roles to the service account
for role in "${roles[@]}"; do
    echo "Assigning role $role to service account $service_account_name"
    gcloud projects add-iam-policy-binding $project_name \
        --member="serviceAccount:$service_account_name@$project_name.iam.gserviceaccount.com" \
        --role=$role
done

# Generate key for the service account
echo "Generating key for the service account"
gcloud iam service-accounts keys create key.json \
    --iam-account="$service_account_name@$project_name.iam.gserviceaccount.com"

echo "Operations completed. You can now download your json key to upload in Qovery"