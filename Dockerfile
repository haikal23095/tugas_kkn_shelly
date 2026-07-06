FROM nginx:alpine

# Copy built files
COPY dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080 (Cloud Run port)
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
