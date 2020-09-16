# Notes

## Why is there console error when POST?
Add `{responseType: 'text'}` to the POST request.

## Why does `HttpClientTestingModule` not resolve HttpClient?
* It turns out the error is not from the service but from the component
* each component that references an HttpService must also import the HttpClient testing module

* As a precaution, we should be creating **dumb** components and reducing the number of
injected services as much as possible.