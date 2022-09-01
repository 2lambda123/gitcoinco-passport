import React from "react";

// --- Chakra UI Elements
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Switch,
} from "@chakra-ui/react";

import { PLATFORMS, PlatformSpec } from "../config/platforms";
import { PlatformGroupSpec, STAMP_PROVIDERS } from "../config/providers";

export type SideBarContentProps = {
  currentPlatform: PlatformSpec | undefined;
  currentProviders: PlatformGroupSpec[] | undefined;
  verifyButton: JSX.Element | undefined;
};

export const SideBarContent = ({
  currentPlatform,
  currentProviders,
  verifyButton,
}: SideBarContentProps): JSX.Element => {
  return (
    <DrawerContent>
      <DrawerCloseButton />
      {currentPlatform && currentProviders ? (
        <div>
          <DrawerHeader>
            <div className="mt-10 flex flex-col sm:flex-row">
              <div className="w-full text-center sm:py-8 sm:pr-8">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full text-gray-400">
                  <img alt="Platform Image" className="h-full w-full" src={currentPlatform?.icon} />
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <h2 className="font-miriam-libre title-font mt-4 text-2xl font-medium text-gray-900">
                    {currentPlatform?.name}
                  </h2>
                  <p className="font-miriam-libre text-base text-gray-500">{currentPlatform?.description}</p>
                </div>
              </div>
            </div>
          </DrawerHeader>
          <DrawerBody>
            <div>
              <button className="text-purple-connectPurple">Select all</button>
              <hr className="border-1" />
              {currentProviders?.map((stamp, i) => {
                return (
                  <div key={i} className="border-b-2 py-4">
                    <p className="font-bold">{stamp.platformGroup}</p>
                    <div className="flex flex-row">
                      <ul className="list-disc">
                        {stamp.providers?.map((provider, i) => {
                          return (
                            <li className="ml-4 mb-2 text-gray-400" key={`${provider.title}${i}`}>
                              {provider.title}
                            </li>
                          );
                        })}
                      </ul>
                      <div className="align-right flex">
                        {/* TODO -- upon selection of switch all the providers under this platform group should have all their providers selected  */}
                        <Switch colorScheme="purple" size="lg" />
                      </div>
                    </div>
                  </div>
                );
              })}
              {verifyButton}
            </div>
          </DrawerBody>
        </div>
      ) : (
        <div>
          <DrawerHeader>
            <div className="mt-10 flex flex-col sm:flex-row">
              <div className="w-full text-center sm:py-8 sm:pr-8">The requested Platform or Provider was not found</div>
            </div>
          </DrawerHeader>
        </div>
      )}
    </DrawerContent>
  );
};