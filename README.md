# noexit

Makes `process.exit` a deprecated no-op.

This is useful to ensure that overly zealous libraries don't know
their place.

If you set the `--no-deprecation` flag, then `process.exit` will
simply do nothing.  If you set `--throw-deprecation`, then it will
throw.

Because Hell is other people's code.
