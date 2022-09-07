package model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "address")
public class AddressBean implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Integer mId; 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer aId;
	private String address;

	public AddressBean() {
	}

	public AddressBean(Integer mId, Integer aId, String address) {
		this.mId = mId;
		this.aId = aId;
		this.address = address;
	}

	public Integer getmId() {
		return mId;
	}

	public void setmId(Integer mId) {
		this.mId = mId;
	}

	public Integer getaId() {
		return aId;
	}

	public void setaId(Integer aId) {
		this.aId = aId;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "AddressBean [mId=" + mId + ", aId=" + aId + ", address=" + address + "]";
	}


}
