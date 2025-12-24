FROM ghcr.io/thedevminertv/gostatic:1.5.2
COPY ./ /static
CMD [ "-spa" ]