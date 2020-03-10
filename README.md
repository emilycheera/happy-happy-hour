# Happy Happy Hour
This web app was created as a part of the 2020 DeveloperWeek Hackathon in San Francisco. My team participated in the TomTom API challenge to reduce food waste. Happy Happy Hour lets restaurants create happy hour specials out of inventory that will soon expire, and users can search a map for local deals.

## Contents
* [Tech Stack](#tech-stack)
* [Features](#features)
* [Future State](#future)
* [Installation](#installation)

## <a name="tech-stack"></a>Tech Stack
__Frontend:__ JavaScript, jQuery, HTML5, CSS, Bootstrap<br/>
__Backend:__ Python, Flask, PostgreSQL, SQLAlchemy<br/>
__API:__ TomTom API<br/>

## <a name="features"></a>Features

#### Landing Page
Users can search the map powered by TomTom's API for local happy hour offers.

![alt text](https://github.com/emilycheera/happy-happy-hour/blob/master/static/image/landing-page.png?raw=true "Happy Happy Hour landing page")

#### Restaurant Dashboard
After restaurant owners register an account and login, they can post an offer to display on the map.

![alt text](https://github.com/emilycheera/happy-happy-hour/blob/master/static/image/dashboard.png?raw=true "Happy Happy Hour restaurant dashboard")


## <a name="future"></a>Future State
There are many features we'd like to add in the future:
* Adding user accounts so they can opt-in to receive alerts for local deals
* Route users from their current location to the restaurant
* Add option to filter deals by price, time, and cuisine

## <a name="installation"></a>Installation
To run Happy Happy Hour on your local machine, follow the steps below:

Install PostgreSQL (Mac OSX)

Clone or fork this repo:
```
https://github.com/emilycheera/happy-happy-hour.git
```

Create and activate a virtual environment inside your Nourish directory:
```
virtualenv env
source env/bin/activate
```

Install the dependencies:
```
pip install -r requirements.txt
```

Set up the database:

```
createdb happy
python3 seeds.py
```

Run the app:

```
python3 server.py
```

You can now navigate to 'localhost:5000' to access Happy Happy Hour.
