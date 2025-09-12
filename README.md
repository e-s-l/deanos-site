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
