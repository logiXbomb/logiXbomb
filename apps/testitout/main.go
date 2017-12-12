package main

import (
	"fmt"
	"net/http"
)

func handleIt(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "Welcome To logiXbomb")
}

func main() {
	http.HandleFunc("/", handleIt)
	http.ListenAndServe(":80", nil)
}
