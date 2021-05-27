FROM node:11
 
# copy project files
COPY ./gulp /root/gulp
COPY package.json /root/package.json
COPY gulpfile.js /root/gulpfile.js
COPY .eslintrc /root/.eslintrc
COPY .stylelintrc /root/.stylelintrc


# set working directory
WORKDIR /root

# install node packages
RUN npm install

# build
# CMD npm run gulp build
