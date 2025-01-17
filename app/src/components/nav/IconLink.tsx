import { Icon, HStack, Text, type BoxProps } from "@chakra-ui/react";
import { type IconType } from "react-icons";
import NavSidebarOption from "./NavSidebarOption";
import { ProjectLink, type ProjectLinkProps, type ProjectRoute } from "../ProjectLink";

const IconLink = <T extends ProjectRoute>({
  icon,
  label,
  href,
  color,
  beta,
  ...props
}: { label?: string; icon: IconType; href: string; beta?: boolean } & ProjectLinkProps<T> &
  BoxProps) => {
  return (
    <ProjectLink href={href} style={{ width: "100%" }}>
      <NavSidebarOption activeHrefPattern={href}>
        <HStack w="full" justifyContent="space-between" p={2} color={color} {...props}>
          <HStack w="full" justifyContent="start">
            <Icon as={icon} boxSize={6} mr={2} />
            <Text fontSize="sm" display={{ base: "none", md: "block" }} whiteSpace="nowrap">
              {label}
            </Text>
          </HStack>
          {beta && (
            <Text fontSize="xs" ml={2} fontWeight="bold" color="orange.400">
              BETA
            </Text>
          )}
        </HStack>
      </NavSidebarOption>
    </ProjectLink>
  );
};

export default IconLink;
