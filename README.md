components: This folder is for React components. Each component has its own folder with the component code and associated tests.
pages: This is a special folder in Next.js. Each JavaScript or TypeScript file in this folder becomes a route in your application.
lib: This is for code that's used across different parts of your application, like a code for making API requests or interacting with a database.
styles: This is for global styles.
tests: This is for test utilities and setup.
utils: This is for utility functions, constants, etc.`


FOR Https : Mac


mkdir certificates
cd certificates
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
    -keyout localhost.key -out localhost.crt
This creates a localhost.crt and localhost.key file in a certificates directory at your project root level.

Remember: The localhost.key file needs to be kept secure. Ensure certificates is in your .gitignore file so you don't commit your SSL keys.

For Https: Windows
mkdir certificates
cd certificates
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\n\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
