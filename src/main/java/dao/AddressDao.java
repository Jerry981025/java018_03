package dao;

public interface AddressDao {
	public void deleteAddress(int aId);

	public int saveAddress(Integer mId, String address);
}