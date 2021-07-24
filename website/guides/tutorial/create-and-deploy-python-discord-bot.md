---
last_modified_on: "2021-07-24"
$schema: "/.meta/.schemas/guides.json"
title: How to create and deploy a Discord bot in Python
description: This tutorial will show you how to create and host a Discord bot made with Python.
author_github: https://github.com/Aggis15
tags: ["type: tutorial", "framework: discordpy"]
hide_pagination: true
---
import Alert from '@site/src/components/Alert';
import Assumptions from '@site/src/components/Assumptions';
import Jump from '@site/src/components/Jump';

<Alert type="success">

This tutorial was created by [Aggis](https://github.com/Aggis15) - Active Qovery contributor

</Alert>

In this guide, you'll learn how to create a very simple Discord bot in Python that will respond to messages and how you can host it with Qovery.

> Discord.py is a famous Python package you can use for creating complex bots made in Python that can do everything Discord's API supports. It's flexible and easy to use

# Installing the required libraries

<Alert type="info">
    
If you already have Discord.py and python-dotenv installed, you can move on to [the next step](#write-your-discord-bot)

</Alert>
    
Start by opening a command prompt, then type the following command:
    
```bash
python3 -m pip install -U discord.py python-dotenv
```

This will fetch the latest version of both packages from PyPI. If you run into any issues, make sure pip is installed and set up correctly. You can follow the pip docs [here](https://pip.pypa.io/en/stable/installing/) to install it correctly.

Now you are ready to write your Discord bot! 

# Get your Bot token

1. Head back to the browser, and go to the [Discord developer portal](https://www.discord.com/developers). Here you are going to log in with your account, and click on New Application on the top right. From there, give your bot a name. It can be anything you like.

2. Now, it should automatically redirect you to your bot page. Click on Bot, and then Add Bot. Click, Yes, do it.

3. From here, you're gonna need the token, so go ahead and click on copy, and keep it somewhere for now until we use it.

4. Go back to the OAuth2 tab, and click on Bot, then below, check all the permissions you want to have. For the purpose of the tutorial, I just clicked on Administrator, which gives the bot every permission.

5. Copy the link that comes up, and paste it in your browser. Discord will ask you which server you want to add your bot, so choose the one you want. After that, your bot should be in your server. It will be offline and that's okay for now.

<p align="center">
        <img src="/img/discordpy-tutorial.png" alt="Discord Portal" /> 
</p>

# Write your discord bot

<Alert type="info">

If you want to know more about the discordpy library and the many functions it has, you can take a look at their [documentation](https://discordpy.readthedocs.io/en/stable/)

</Alert>

1. Start by making a new folder for your bot files to reside. It can be anywhere you like. 

2. Open up your IDE of your choosing and navigate to the directory you made.

3. From there, create a new python file. You can name it whatever you like, just make it easy to type, like `main.py`. 

4. You're also going to create a new file called `.env`. There we are going to store all our sensitive values like our bot token.

5. Now we get to the coding part. Start by importing all the needed libraries, it's as simple as: 

```
import os
import discord
from dotenv import load_dotenv
```

6. Initialize the dotenv library by adding the following line below:

```
load_dotenv()
```

7. Now go back to the .env file and create a new variable called token and paste your token.

```
token=your_token_here
```

8. After that, you're ready to import the value from the file. Go ahead and add this line to your code:

```
token = os.getenv("token")
```

9. Now we get to actually code the bot. Start by initializing the client. To do that, it's as simple as:

```
client = discord.Client()
```

10. Then, we're going to be adding a very simple function where the client will say something in the console when the bot is ready. To do this, you can add this function to your code:

```
@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')
```

11. Now, we can make a simple function where the bot will respond to someone when they say hello. The following code is responsible for that:



