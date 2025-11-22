# Drive Tutorial

## TODO

- [x] Set up database and data model
- [x] Move folder open state to URL
- [x] Add auth
- [x] Add file uploading
- [] Add analytics

## 11/19/2025

- [x] Add "ownership" to files and folders
- [x] Upload files to the right folder
- [] Delete files button
- [x] Allow files that aren't images to be uploaded
- [x] Real homepage + onboarding (won't have root folder during onboarding. handle that.)
- [x] Add deletion
- [x] Make sure sort order is consistent
- [x] Allow onboarding root folder creation
- [] Include fileKey in schema -- then migrate instead of overriding
  -- But fileKey comes from uploadthing, not singlestore db. so how do we get them into singlestore?
- [] Add deletions to folders too
- [] When onboarding root folder creating, check if user isn't already onboarded, and root doesn't already exist; also should be done in a transaction.
- [] Allow folder creation
  -- Make a server action that takes a name and parentId, and creates a folder with that name and parentId (don't forget to set the ownerId).
- [] Access control
  -- Check if user is owner before showing the folder page.
- [] Make a "file view" page
- [] Toasts, for when uploading (when done).
- [] Gray out a row while it's being deleted.
- [] 