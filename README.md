# Vendor Inventory Table
This is a prototype/v0 for the Vendor inventory table that leverages the react-create-table functionality to create a table-like display.

## How to Run

Create a conda environment with Node.js and Yarn

```bash
conda create -n newenv
conda activate newenv
conda install -c conda-forge nodejs
conda install -c conda-forge yarn

```
You can use run to view the latest version of the inventory table. Enter the directory inventory-table and run the command below. It will open in http://localhost:3000/.  
```bash
yarn start
```

## Troubleshooting Tips
If yarn start doesn't work:
- Type yarn into conda.  This will kickstart yarn to finish installation. It take a couple mins for it to install.

If your updates are not showing up:
1) Check to make sure that you are using a browser that supports React. Internet Explorer is a toss up, try to use Chrome or Firefox.
2) Refresh the page manually.  While the page will usually update on its own, a hard refresh can help to show updates quickly.

## TO-DO List
1) Add more color to the table that is conditional on the value.  For example: red text or background for Status == Canceled.
2) Create multiple pages to compartmentalize the information for better user-readbility.
3) Create a backend that is similar to the input data file and ingest it for smoother updates.
