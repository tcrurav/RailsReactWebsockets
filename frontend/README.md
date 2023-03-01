# Rails Websockets + React using ActionCable

A Ruby on Rails API using ActionCable and React to create a simple Chat. 

### Before starting

I recommend you to follow the tutorials recommended bellow in the links to understand this project.

### Prerequisites

Before starting you need some background on Ruby and Rails. Check the links bellow.

You need a working environment with Ruby on Rails installed and PostgreSQL as well.

In my case I used WSL2 with Ubuntu 20.04. See the links bellow.

It's necessary to install Postgresql. See the links bellow to install it on WSL2.

### Installing

Open a command line console and clone this project.

```
git clone https://github.com/tcrurav/RailsReactWebsockets
```

Go to the new created directory

```
cd RailsReactWebsockets/backend
```

Install all dependencies

```
bundle install
```

Change the file config/database.yml

```
database: ruby_bicycles_development
username: postgres  
password: <your password>
```

Now make all migrations:

```
rails db:create db:migrate
```

Boot your API

```
rails s
```

Now it's time to start your frontend

```
cd RailsReactWebsockets/frontend
```

install all dependencies:

```
npm install
```

run the frontend in 2 browser windows or tabs to see the websockets working:

```
npm start
```

Enjoy!!!


## Built With

* [Rails](https://rubyonrails.org/) - Rails is a full-stack framework. It ships with all the tools needed to build amazing web apps on both the front and back end
* [ActionCable](https://guides.rubyonrails.org/action_cable_overview.html) - Action Cable seamlessly integrates WebSockets with the rest of your Rails application.
* [PostgreSQL](https://www.postgresql.org/) - The World's Most Advanced Open Source Relational Database
* [WSL 2 - Ubuntu 20.04](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-10) - Install Ubuntu on WSL2 on Windows.

## Acknowledgments

* https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-database. Install Postgresql on WSL2.
* https://www.youtube.com/watch?v=DED9YZWVbO8. Installing rvm and ruby on Windows with Ubuntu bash using WSL2.
* https://www.fmendez.com/web-sockets-with-react-redux-and-ruby-on-rails. I use this tutorial to create the basics of this simple example.
* https://dev.to/lisahjung/beginner-s-guide-to-creating-an-api-from-scratch-using-rails-2eie. Beginner's guide to creating an API from scratch (using Rails 6).