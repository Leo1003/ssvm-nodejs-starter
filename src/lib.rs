use wasm_bindgen::prelude::*;
use sha2::{Digest, Sha256};

#[wasm_bindgen]
pub fn sha256(data: Vec<u8>) -> Vec<u8> {
    let mut d = Sha256::new();
    d.update(&data);
    let buf = Vec::from(d.finalize().as_slice());

    buf
}

#[wasm_bindgen]
pub fn say(s: &str) -> String {
    println!("The Rust function say() received {}", s);
    let r = String::from("hello ");
    return r + s;
}
