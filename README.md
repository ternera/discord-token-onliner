# Discord Token Onliner Tool

## Overview

A simple Node.js script that keeps your Discord user account online 24/7.

## Setup Instructions

1. Make sure you have [Node.js](https://nodejs.org/) installed (version 16.x or higher recommended)
2. Download the `onliner.js` script
3. Install the required dependency:
   ```
   npm install discord.js-selfbot-v13
   ```
4. Add your Discord token to the script (see below for how to obtain it)
5. Run the script:
   ```
   node onliner.js
   ```

## How to Get Your Discord Token

1. Open Discord in your browser or the desktop app
2. Press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac) to open Developer Tools
3. Go to the "Network" tab
4. Refresh the page (F5) if needed
5. Look for a request to "science" or any Discord API endpoint
6. Check the request headers and find the "authorization" header - this is your token

## ⚠️ Important Disclaimers

- **Terms of Service Warning**: Using user account tokens with automated scripts ("selfbots") is against Discord's Terms of Service and may result in account termination.
- **Educational Purpose**: This tool is provided for educational purposes only.
- **Use At Your Own Risk**: The authors of this tool take no responsibility for any consequences that may arise from using it.
- **Security**: Never share your Discord token with anyone. It provides full access to your account.

## Troubleshooting

If you encounter issues:
- Make sure your token is correct and has not expired
- Check that you've installed the correct dependency version
- Verify your Node.js version is compatible
- If your status doesn't update, try restarting the script

## License

This project is provided as-is with no warranty or guarantees.
