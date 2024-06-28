import {
  SubAccountInfoInterface,
  UserPackageInterface,
} from '@/model/subAccout';

export const mergedPackageById = (
  originData: SubAccountInfoInterface[],
  packageData: UserPackageInterface[],
) => {
  const result =
    originData?.map((originItem) => ({
      ...originItem,
      isUpgrade: packageData?.some((item) => item?.children === originItem?.id),
    })) || [];

  return result;
};
