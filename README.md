# about

# set-up

copy primary directory (with index.html &c) to `/var/www` or whatever.

## cgi

(create and) move perl script to `/var/www/cgi-bin/` and create `/var/www/cgi-bin/log/contacts.log`

### perl environment

install the required perl modules...

note that these have dependencies on the following system packages...

## permissions

the cgi script should be exectuable but not writable (by anyone) *i.e* ...

what should they all be, explicitly?

# adding pages

new works pages must be added under the pages "pages" directory and in the array of the `work-details.js` script

# security

no CRSF avoidance

# trouble shooting

tail the following
```
/var/www/cgi-bin/log/contacts.log 
```
and, if using **caddy**
```
/var/log/caddy/access.log 
```
as well as
```
journalctl -u caddy -f
```

# future work

# extra

## notes on enabling cgi-bin with caddy

To do this we need to recreate the caddy binary with a cgi plugin added.

We do this using [xcaddy](https://github.com/caddyserver/xcaddy?tab=readme-ov-file)
and [this plugin](https://github.com/aksdb/caddy-cgi).

Read the docs. 

Make sure to (back up and) replace the caddy binary in the bin folder with the newly generated one.

Check the new functionality is now available by:
```
caddy list-modules | grep cgi
```

Then the caddy file section should look something like:
```
the-website.com {
	root * /var/www/the-directory
	file_server

	log {
		format console
		output file /var/log/caddy/access.log {
			roll_size 10MB              # New file when size exceeds 10MB
			roll_keep 5                 # Keep at most 5 files
		}
	}

	cgi /the-action-path /the-exec /var/www/cgi-bin/the-file {
		pass_env PATH
		# inspect                       # for development testing and debug
	}
}
```
