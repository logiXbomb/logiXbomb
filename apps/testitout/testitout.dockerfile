from golang

ADD . /

WORKDIR /

RUN go build main.go