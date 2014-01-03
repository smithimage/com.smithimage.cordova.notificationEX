//
//  Notification.h
//  PhoneGap
//
//  Created by Michael Nachbaur on 16/04/09.
//  Copyright 2009 Decaf Ninja Software. All rights reserved.
//

#import <Cordova/CDVPlugin.h>
#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <AudioToolbox/AudioServices.h>
#import <Cordova/NSDictionary+Extensions.h>
#import "LoadingView.h"

@interface NotificationEx : CDVPlugin {
	NExLoadingView* loadingView;
}

@property (nonatomic, retain) NExLoadingView* loadingView;

- (void)loadingStart: (CDVInvokedUrlCommand*) command;
- (void)loadingStop: (CDVInvokedUrlCommand*) command;

- (void)activityStart: (CDVInvokedUrlCommand*) command;
- (void)activityStop: (CDVInvokedUrlCommand*) command;

@end
