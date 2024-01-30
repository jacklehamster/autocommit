#!/bin/bash

# Add all changes to the staging area
git add .
echo "Debug: Files added to the staging area."

# Get the list of files about to be committed
files=$(git status --porcelain | awk '{print $2}')

# Create a temporary file for the commit message
temp_file=$(mktemp)
trap 'rm -f "$temp_file"' EXIT

# Write the commit message to the temporary file
{
  echo "Auto-commit: $(date +"%Y-%m-%d %H:%M:%S")"
  echo -e "\nFiles:"
  for file in $files; do
    echo "$file"
  done
  echo -e "\n\nhttps://github.com/jacklehamster/autocommit"
} > "$temp_file"

# Commit with the message from the temporary file
git commit -F "$temp_file"

# Print a message indicating the successful commit
echo "Changes committed successfully."
