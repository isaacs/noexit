# noexit

Makes `process.exit` a deprecated no-op.

If you set the `--no-deprecation` flag, then `process.exit` will
simply do nothing.  If you set `--throw-deprecation`, then it will
throw.

This is useful to ensure that overly zealous libraries who don't know
their place can atone for their sinful weakness.

Because Hell is other people's code.
