package com.yourpackage

import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod

class MyKotlinModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "MyKotlinModule"
    }
    
    @ReactMethod
    fun greet(name: String) {
        println("Hello, $name!")
    }
}
